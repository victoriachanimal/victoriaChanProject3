const hangoverLevels = {
    // Level 1 Hangover
    hangover1: [
        {
            title: `Be Basic, Be Traditional`,
            text: `Aspirin, water and a cat nap, obviously.`
        },

        {
            title: `One shot of vodka, two advils, and three Happy Meals`,
            text: `You’ve mildly avoided a raging headache, so why not continue the fun? Mimick the sounds of a car and crawl to the Mcdonald's drive through, ordering your meal there.`
        },

        {
            title: `God's Gatorade`,
            text: `You're feeling pretty smug having dodged a bad hangover, but still craving some electrolytes. Aim for fresh coconut water, sipped straight from the shell. Walk briskly to the nearest grocery store, avoiding human interaction as much as possible.`
        },

        {
            title: `Oxygen Mask`,
            text: `Fresh air does wonders to a healing body, so why not go for the purest air there is? Pay no attention to the people pointing and laughing at you.`
        },

        {
            title: ``,
            text: ``
        },

    ],
    // End of Level 1 Hangover
    // Level 2 Hangover
    hangover2: [
        {
            title: `Hair of the Dog`,
            text: `But actually - shave a dog, preferably one with coarse hair. Then eat its hair.`
        },

        {
            title: `Sweat it out, Jane Fonda style`,
            text: `Get moving with an iconic staple from the star's 1982 low impact aerobic workout video, available for $65 on Amazon.`
        },

        {
            title: `A fast-paced, 10-mile Run (or stumble) of Shame`,
            text: `You did this to yourself. Now grab your Nikes, a bucket, and pray you don't vomit on any innocent bystanders.`
        },

        {
            title: `Have 'no regratts'`,
            text: `I mean...That's what your newest tattoo says...`
        },

        {
            title: `So Yesterday`,
            text: `Write yourself a letter the day before, reassuring yourself that you will get through the mass inconveniences and problems you are created for yourself today.`
        }
    ],
    // End of Level 2 Hangover
    // Level 3 Hangover
    hangover3: [
        {
            title: `Liquid Jell-O`,
            text: `Submerge a pack of Jell-O in hot water, mix it up and sip on it. This creative concoction will restore your body's electrolytes and stay in your stomach, especially if you'll have trouble keeping anything beyond liquids down.`
        },

        {
            title: `Misery Loves Company`,
            text: `Bring someone down with you. Make a friend or loved one drink alcohol to pass the hangover on to them.`
        },

        {
            title: `Bull's Eye`,
            text: `Fix yourself a glass of orange juice, with a raw organic egg inside. If my 81-year-old grandfather can chug that every Sunday before Church, so can you.`
        },

        {
            title: `A Slap in the Face`,
            text: `Wake up and stop feeling sorry for yourself. It could be worse.`
        },

        {
            title: `Cheer Up`,
            text: `You hate everyone, and the thought of that annoys you even more. Shift your focus by decorating your ceiling fan with Christmas lights and staring at it.`
        },
    ],
    // End of Level 3 Hangover
    // Level 4 Hangover
    hangover4: [
        {
            title: `Compare Yourself to Others`,
            text: `Watch Amy Schumer's 2015 movie Trainwreck 3 times. It helps to see someone who's a hotter mess than you are.`
        },

        {
            title: `Menthol Magic`,
            text: `Your head must be aching. Rub some Vick's Vapor Rub on that scalp, pronto!`
        },

        {
            title: `Apologize to everyone you know`,
            text: `You can bet your descent into drunken chaos the night before has destroyed at least three long-time friendships.`
        },

        {
            title: `Cool Off`,
            text: `Lay in a tub of 50% ice and 50% water to cool that hot mess down.`
        },

        {
            title: `Snow Bunny`,
            text: `If available, shove some snow in your mouth. Better yet, make your own snowcone - the subtle crunch will satisfy your hunger, and the cool water will hydrate you.`
        },
    ],
    // End of Level 4 Hangover
    // Level 5 Hangover
    hangover5: [
        {
            title: `Tender Surrendor`,
            text: `Lie flat down in the middle of a dimly lit room and cry.`
        },

        {
            title: `Build a Time Machine`,
            text: `... And just sit in it.`
        },

        {
            title: `Arrange an Exorcism`,
            text: `You've been screaming like a banshee all day. It's time to contact Father Lankester Merri.`
        },

        {
            title: `This is the Apocalypse`,
            text: `... at least it feels like it. Close your blinds , gather all frozen and non-perishable food items from your kitchen, and recede to the darkest corner of your home.`
        },

        {
            title: `You need a 'Banana Bag'`,
            text: `Otherwise known as an IV drip, the Banana Bag contains a special cocktail of vitamins, minerals and electrolytes, traditionally used by EMTs to restore all the lost nutrients and chemicals in their patients. It kind of looks like urine, but it will save you. (Note: this only works if you have easy access to IV drips or are friends with an EMT).`
        },
    ],
    // End of Level 5 Hangover

};

// ROADMAP SUMMARY:
// Create a namespace
// When the form submits... 
// Prevent default
// Listen to which input user selects
// Match user's choice to the hangover option
    // get value of title 
    // get value of advice 
// Make user select only one option 
// Create a function that randomizes objects in a given option array and selects only one 
// Put hangover advice on page
// Make sure that once the user selects and submits their choice, that the next hangover advice REPLACES the previous one (ie empty?) 

// DOC READY STARTS
// *Create a namespace
const hangoverApp = {};

// Create a function that randomizes objects in a given option array and selects only one 
const randomResult = (array) => {
    const randomAdvice = Math.floor(Math.random() * array.length);
    return array[randomAdvice];
}


// Put submit event listener in the hangoverApp object
hangoverApp.submitChoice = function() {
    // When the form submits (event listener)...
    $('form').on('submit', function (event) {

        // Prevent default
        event.preventDefault();

        // Get value of user choice and store in variable - which hangover level did they choose? 
        const userHangoverChoice = $('input[name=option]:checked').val();


        const hangoverAdvice = hangoverLevels[userHangoverChoice];


        // Create title variable 
        const hangoverResult = randomResult(hangoverAdvice);

        console.log(hangoverResult.title);

        // Create an advice variable

        console.log(hangoverResult.text);

        // Put hangover advice on page
        // Make sure that once the user selects and submits their choice, that the next hangover advice REPLACES the previous one (ie empty?)
        const titleResult = `<h3>${hangoverResult.title}</h3>`

        $('.titleResult').html(titleResult);

        const textResult = `<p>${hangoverResult.text}</p>`

        $('.textResult').html(textResult);

    });
    // End of form submit (event listener)
};


// Create an init method on the hangoverApp object, to be called inside the Doc Ready below
hangoverApp.init = function(){
    hangoverApp.submitChoice();
};


$(function () {
    // Call init function
    hangoverApp.init();
});
// DOC READY ENDS