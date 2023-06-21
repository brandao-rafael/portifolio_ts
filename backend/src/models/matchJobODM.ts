import { Schema } from "mongoose";
import AbstractODM from "./abstractODM";
import IMatchJob from "../interfaces/IMatchJob";

export default class MatchJobODM extends AbstractODM<IMatchJob>{
  constructor() {
    const matchSchema = new Schema({
      id: { type: String, required: false, auto: true },
      name: { type: String, required: false },
      prompt: { type: String, required: true },
      result: { type: String, required: true },
    });

    super(matchSchema, 'matchJob');
  }
}
