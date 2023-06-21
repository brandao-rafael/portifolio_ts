import { Configuration, OpenAIApi } from "openai";
export default class AiMatch {
  private openai;
  constructor() {
    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(config);
  }
  public async getPercentage(prompt: string): Promise<string> {
    const result = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt}],
    });
		console.log(result.data);
    return result.data.choices[0].message?.content || "";
  }
}
