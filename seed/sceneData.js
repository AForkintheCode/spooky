const { Scene } = require("../models");
const sceneData = [
  {
    id: "0",
    image: "pathtoimagehere",
    title: "Prendergast Manor",
    text: "tentative outline for story path",
  },
  {
    id: "1",
    image: "",
    title: "Start",
    text: "You and your friends stand at the doorstep of Prendergast manor. Everyone in town knows about this place, or the rumors anyway. The previous owner, Lord Prendergast, was as eccentric as he was rich. When he died, his will stated that whoever could last a whole night in the manor would earn the rights to Lord Prendergast's lavish fortune. You and your friends agreed to stay the night together, then split your winnings. Unbeknownst to your group, the mansion is a death trap. You all look at each other, daring the other to back out before it is too late. But no one does. button: Step inside.",
  },
  {
    id: "2",
    image: "",
    title: "The Foyer",
    text: "It's been awhile since someone has dusted in here. The once lavish manor has fallen into disrepair since the previous owner’s death. Most of the doors of the doors and windows are sealed shut, except for the doors to the kitchen, the library, and the back door leading to the garden. Where do you go? button: the kitchen button: the library button: the garden",
  },
  {
    id: "3",
    image: "kitchen.jpg",
    title: "The Kitchen",
    text: "Twinkies don't expire right? You make your way to the kitchen. The floorboards whine with each step you take, piercing the manor's heavy silence. Unfortunately the kitchen was emptied out long ago. You do notice, however, a waft of cold air coming from what looks to be a wine cellar. Weird. You wouldn't turn down an expensive cask of wine though. Button: Go down to the Cellar, Button: Keep Exploring the Manor",
  },
  {
    id: "4",
    image: "library.jpg",
    title: "The Library",
    text: "Libraries are safe. Maybe you and your friends can camp out there for the night. You go to scout it out. Despite the state of the rest of the manor, the library seems to be in good condition. Books line the shelves neatly, and ladders ascend to the top of the room’s vaulted ceilings. Out of the corner of your eye, you notice a brief rush of movement as something skitters up a ladder and disappears behind one of the shelves. You notice a draft from behind this bookshelf, maybe there's a secret door? Button: Climb the ladder, Button: This is creepy, go back to the Foyer",
  },
  {
    id: "5",
    image: "cellar.png",
    title: "The Cellar",
    text: "You open the cellar door to find a stairwell that leads undergrown in pitch darkness. You take a deep breath and decide to forge ahead. When you reach the bottom, you realize this isn't an ordinary cellar. Strange medieval devices clutter the room. Despite the lack of ventilation, you can't help but notice another rush of cold air. This place is creepy. button: Run up the stairs as fast as you can!",
  },
  {
    id: "6",
    image: "garden.png",
    title: "The Garden",
    text: "Perhaps if you stay outside, the horrors of the mansion won't reach you. You step into the overgrown garden. In the distance you notice a strange golden glow. It's coming from the cemetery! Perhaps the Prendergast fortune is hidden there. Button: Go to the Cemetery button: Keep exploring (returns to foyer)",
  },
  {
    id: "7",
    image: "old-cemetery.jpg",
    title: "The Cemetery",
    text: "You push open the creaky iron gate. The grass and trees are terribly overgrown, but the glowing golden light is unmistakable now. You rush forward. Maybe you can trick your way out of staying the night here. Grave robbing is a victim-less crime right? button: ... ",
  },

  {
    id: "8",
    image: "seance.png",
    title: "The Seance",
    text: "As you climb you notice a faint light behind the bookshelf peeking between the books. You push the books aside and find a peculiar hidden reading room. In the center of the table you see a ouija board. As you move closer you notice the planchette moving over the board on it's own. You put your hands on the planchette and it spells out. “<user's name>, my manor is yours now, for a price.” Do you agree?  Button: Yes, win! Button No(returns user to foyer)",
  },
  {
    id: "9",
    image: "blackness.jpg",
    title: "You Die in the Cellar",
    text: "Forget the wine, you book it up the dark stairway, your sight set on the dim light of the kitchen above you. You almost reach the top when a rush of cold air hits you. Out of nowhere you feel icy hands claw at your shoulder blades, lifting you up by the back of your shirt. Your shoes scuff the stone staircase as you kick out at nothing. “Let go of me!” You shout, and the hands release you, sending you into a free fall down to the cellar far below you. Everything goes black. Button: Try again?",
  },
  {
    id: "10",
    image: "blackness.jpg",
    title: "You Die in the Cemetery",
    text: "Just as the thought crosses your mind, and undead arm bursts from the ground and latches onto you leg. You cry out, and your ankle twists painfully as the ghoul's strong grip pulls you down. Darkness quickly overtakes you as your body is dragged into the earth. Button: Try again?",
  },
  {
    id: "11",
    image: "treasureopen_720.png, treasureclose_720.png",
    title: "You Survived!",
    text: "You agree. The whole manor seems to start shaking, books falling from the shelves. One particularly large tome hits your head and you black out. When you wake up, you notice daylight streaming into the library. A nearby chest filled to the brim with Lord Prendergast's fortune sits open. You go to find your friends, but they have all mysteriously disappeared. The following days are filled with fame and luxury, but you never see your friends again. Perhaps that was the price for your survival. The End.",
  },
];

const seedScenes = () => Scene.bulkCreate(sceneData);

module.exports = seedScenes;
