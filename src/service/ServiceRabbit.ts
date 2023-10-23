import amqplib from "amqplib"
import dotenv from "dotenv";

class ServiceRabbit {
    readonly queue = 'pokemons';

    constructor() {
        dotenv.config();
    }

    public async sendToQueue(message: string) {
        const channelSender = await this.createChannel();
        await channelSender.sendToQueue(this.queue, Buffer.from(message));
    }

    public async consumeToQueue(createPokemonCallback: (message: string) => Promise<boolean>) {
        const chanelListener = await this.createChannel();
        await chanelListener.assertQueue(this.queue, {durable: false});

        chanelListener.consume(this.queue, async (message : any) => {
            if (message !== null) {
                console.log('Received:', message.content.toString());
                const result = await createPokemonCallback(message.content.toString());
                console.log(result);
                chanelListener.ack(message);
            } else {
                console.log('Consumer cancelled by server');
            }
        });
    }

    private async createChannel(){
        const user = process.env.RABBITMQ_DEFAULT_USER;
        const password = process.env.RABBITMQ_DEFAULT_PASS;
        const connection = await amqplib.connect(`amqp://${user}:${password}@localhost`);
        return connection.createChannel();
    }
}
export default ServiceRabbit;