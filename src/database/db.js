import mongoose from "mongoose"

const connectDatabase = () => {
    console.log("Waiting connect database...")
    mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(
            () => console.log("MongoDb Atlas Connected")
        ).catch(
            error => console.log(error)
        )
}

export default connectDatabase;