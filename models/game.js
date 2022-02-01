const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gameName : {
        type : String,
        required : [true, 'Game name required'],
    },
    gameAbout : {
        type : String,
        required : [true, 'About of game required'],
    },
    gameClass :{
        type : Schema.Types.ObjectId, ref: 'Category',
    },
    gameConsole :{
        type : Schema.Types.ObjectId, ref: 'Console',
    },
    gameClassification: {
        type : Schema.Types.ObjectId, ref: 'Classification'
    },
    gamePrice: {
        type: Number,
        required : true, 
    },
    gameSeries: {
        type : String
    }
});

//Exportar modelo
const Game = mongoose.model('Game', gameSchema);
export default Game;