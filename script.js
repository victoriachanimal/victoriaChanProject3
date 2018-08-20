const hangoverLevels = {
    // Level 1 Hangover
    hangover1: [
        {
            title: `Be Basic, Be Traditional`,
            text: `Aspirin, bottle of water and a cat nap, obviously.`
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
            title: `Hair of the Dog`,
            text: `But actually - shave a dog, preferably one with coarse hair. Then eat its hair.`
        },

        {
            title: `Have 'no regratts'`,
            text: `I mean...That's what your newest tattoo says...`
        },

    ],
   
    // Level 2 Hangover
    hangover2: [
        {
            title: `Oxygen Mask`,
            text: `Fresh air does wonders to a healing body, so why not go for the purest air there is? Pay no attention to the people pointing and laughing at you.`
        },

        {
            title: `Get intoxicated with... water`,
            text: `Guzzle 2-3 litres of water and avoid drowning yourself with over consumption.`
        },

        {
            title: `A fast-paced, 10-mile Run (or stumble) of Shame`,
            text: `Go running, just like you tried to do last night when you ran away from your problems. Grab your Nikes, a bucket, and pray you don't vomit on any innocent bystanders.`
        },

        {
            title: `Sweat it out`,
            text: `Purchase some high absorbing paper towel, and begin by wiping that layer of booze sweats coming out of each pore of your body. Then wrap it some around yourself like a mummy.`           
        },

        {
            title: `Future-proof`,
            text: `Write a letter to yourself for the next time you end up in the same position (because you know you will). Reassure future You that you will get through the mass inconveniences and problems you created for yourself today.`
        }
    ],
   
    // Level 3 Hangover
    hangover3: [
        {
            title: `Liquid Jell-O`,
            text: `Submerge a pack of Jell-O in hot water, mix it all up and sip on it. This creative concoction will restore your body's electrolytes and stay in your stomach, especially if you'll have trouble keeping anything beyond liquids down.`
        },

        {
            title: `Misery Loves Company`,
            text: `Bring someone down with you. Make a friend or loved one drink alcohol to pass the hangover on to them.`
        },

        {
            title: `Bull's Eye`,
            text: `Fix yourself a glass of orange juice, with a raw organic egg inside.`
        },

        {
            title: `Get slapped in the face`,
            text: `You're probably not a joy to be around right now, which will come in handy when you're taunting potential victims to slap you out of your misery. If a friend or loved one isn't around, aim for someone within 20 meters of your home.`
        },

        {
            title: `Cheer Up`,
            text: `You hate everyone today, and the thought of happy, non-hungover people going to get brunch with more people annoys you even more. Shift your focus by decorating your ceiling fan with Christmas lights and staring at it.`
        },
    ],
  
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
            text: `... at least it feels like it. Close your blinds, gather all frozen and non-perishable food items from your kitchen, and recede to the darkest corner of your home.`
        },

        {
            title: `You need a 'Banana Bag'`,
            text: `Otherwise known as an IV drip, the Banana Bag contains a special cocktail of vitamins, minerals and electrolytes, traditionally used by EMTs to restore all the lost nutrients and chemicals in their patients. It kind of looks like urine, but it will save you. (Note: this only works if you have easy access to IV drips or are friends with an EMT).`
        },
    ],
    // End of Level 5 Hangover
};


// *Create a namespace
const hangoverApp = {};

// Create a function that randomizes objects in a given option array and selects only one 
const randomResult = (array) => {
    const randomAdvice = Math.floor(Math.random() * array.length);
    return array[randomAdvice];
}

// Create a function that scrolls down when user clicks on #gameBtn1 on the wide screen
hangoverApp.startWideScreen = function() {
    $('#gameBtn1').on('click', function(event) {
        // Prevent default
        event.preventDefault();

        // Scroll down to see result
        $('html, body').animate({
            scrollTop: $("#gamePage").offset().top
        }, 2000);
    });
};

// Global variables for 3 pages
const homePage = document.getElementsByClassName('homePage');

const gamePage = document.getElementsByClassName('gamePage');

const guidePage = document.getElementsByClassName('guidePage');

// Function to open and close guidepage 
function openGuide() {
    document.getElementById('guidePage').style.height = "100%";
}

function closeGuide() {
    document.getElementById('guidePage').style.height = "0%";
}

// 1. When user clicks on certain buttons, show a page but hide the other 2
hangoverApp.pages = function () {
   
    // When user clicks on #guideBtn, CALL above openGuide() function
    $('#guideBtn').on('click', function (event) {

        // Prevent default
        event.preventDefault();

        openGuide();
    });

    // When user clicks on #exitBtn, CALL above closeGuide() function
    $('#exitBtn').on('click', function(event) {

        // Prevent default
        event.preventDefault();

        closeGuide();
    });

    // When user clicks on #gameBtn2, show Gamepage but hide other 2 pages
    $('#gameBtn2').on('click', function () {
        

        $('.gamePage').show();
        $('.homePage').hide();
        $('.guidePage').hide();
    });
};

// Put "submit event" listener from Gamepage in the hangoverApp object
hangoverApp.submitChoice = function() {
    // When the form submits (event listener)...
    $('form').on('submit', function (event) {

        // Prevent default
        event.preventDefault();

        // Scroll down to see result
        $('html, body').animate({
                scrollTop: $("#results").offset().top
            }, 2000);
      
        // Get value of user choice and store in variable - which hangover level did they choose? 
        const userHangoverChoice = $('input[name=option]:checked').val();

        const hangoverAdvice = hangoverLevels[userHangoverChoice];

        // Create title variable 
        const hangoverResult = randomResult(hangoverAdvice);

        // Put result on page
        const titleResult = `<h3>${hangoverResult.title}</h3>`

        $('.titleResult').html(titleResult);

        const textResult = `<p>${hangoverResult.text}</p>`

        $('.textResult').html(textResult);

    });
};


// Create an init method on the hangoverApp object, to be called inside the Doc Ready below
hangoverApp.init = function(){
    hangoverApp.startWideScreen();

    hangoverApp.submitChoice();

    hangoverApp.pages();
};

// * DOC READY *
$(function () {

    // Call init function
    hangoverApp.init();

});
// * DOC READY ENDS *