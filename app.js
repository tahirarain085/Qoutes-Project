const qoutes = [
    {
        name: 'Nelson Mandela',
        qoute: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        name:"Walt Disney",
        qoute: "The way to get started is to quit talking and begin doing."
    },
    {
        name: "Steve Jobs",
        qoute:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name:"Eleanor Roosevelt",
        qoute:"If life were predictable it would cease to be life, and be without flavor. "
    },
    {
        name:"Oprah Winfrey",
        qoute:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
        name:"James Cameron",
        qoute:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        name:"John Lennon",
        qoute:"Life is what happens when you're busy making other plans"
    }

    ]

    const qouteBtn = document.querySelector('#qouteBtn');
    const qouteAuthor = document.querySelector('#qouteAuthor');
    const qoute = document.querySelector("#qoute");


    qouteBtn.addEventListener('click',getQoute);

    function getQoute(){
        let number = Math.floor(Math.random()*qoutes.length);
        console.log(number)
        qouteAuthor.innerHTML = qoutes[number].name;
        qoute.innerHTML = qoutes[number].qoute;
    }
