import mongoose from 'mongoose';

const { Schema } = mongoose;

const busDataSchema = new Schema({
  type: String,
  source: String,
  destination: String,
  routes: [{
    stage: String,
    place: String
  }]
});
const locationSchema = new Schema({
    source: String,
    destination: String,
  });

busDataSchema.statics.findBySourceAndDestination = async function (source, destination) {
return this.find({ source, destination });
};
  

const BusData = mongoose.model('BusData', busDataSchema);
const LocationData = mongoose.model('LocationData', locationSchema);


export default BusData;
