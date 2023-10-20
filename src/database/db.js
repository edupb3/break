import mongoose from "mongoose"

const connectDatabase = () => {
    console.log("Waiting connect database...")
    mongoose.connect(
        "mongodb+srv://root:compCasa21%23@cluster0.jmlrglq.mongodb.net/?retryWrites=true&w=majority",
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