import cards from "./cards";


export default class Sound {
  category: string;
  constructor(category: string) {
    this.category = category;
  }
  soundGenerate(): [] {
    let sounds: [] = [];
    for (let i: number = 0; i < cards[this.category].length; i++) {
      sounds.push(cards[this.category][i].audio);
    }
    sounds = sounds.sort(() => Math.random() - 0.5)
    return sounds
  }
  soundPlay(sounds: [string], i: number): HTMLAudioElement {
    let audio = new Audio(sounds[i])
    return audio
  }
}