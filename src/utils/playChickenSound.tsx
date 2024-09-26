import chicken1 from '../assets/Sounds/chicken.mp3'
import chicken2 from '../assets/Sounds/chicken-wing.mp3'
import chicken3 from '../assets/Sounds/fingerlickingood.mp3'
import chicken4 from '../assets/Sounds/not-chicken.mp3'

const majorSound = chicken1; // Major sound (90% chance)
const minorSounds = [
  chicken2,     // 3.3% chance
  chicken3,     // 3.3% chance
  chicken4      // 3.3% chance
];

// Interface for profiles and messages
interface Profiles {
  chickenSound: string;
}

interface Message {
  role: string;
  content: string;
  profile: string;
}

export function handlePlayChickenSound(
  setMessages: (callback: (prevMessages: Message[]) => Message[]) => void, 
  profiles: Profiles
) {
  const randomNumber = Math.random() * 100; // Generate a random number between 0 and 100

  let selectedSound: string;
  let messageContent: string;

  // 90% chance to play the major sound
  if (randomNumber <= 90) {
    selectedSound = majorSound;
    messageContent = "Chicken cluck sound played!";
  } 
  // 3.3% chance for each of the minor sounds
  else if (randomNumber > 90 && randomNumber <= 93.3) {
    selectedSound = minorSounds[0];
    messageContent = "Special chicken wing sound played!";
  } else if (randomNumber > 93.3 && randomNumber <= 96.6) {
    selectedSound = minorSounds[1];
    messageContent = "Finger licking good sound played!";
  } else {
    selectedSound = minorSounds[2];
    messageContent = "Oops, that's not a chicken!";
  }

  // Play the selected sound
  const audio = new Audio(selectedSound);
  audio.play();

  // Update messages state to notify that the sound has played
  setMessages((prevMessages: Message[]) => [
    ...prevMessages,
    { role: 'assistant', content: messageContent, profile: profiles.chickenSound }
  ]);
}
