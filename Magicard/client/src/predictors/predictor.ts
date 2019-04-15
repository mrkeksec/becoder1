export const makePrediction = (name: string, age: string) => {
    const predictions = [
      `Powerful you have become, ${name}, the dark side I sense in you.`,
      `Patience you must have my young padawan, ${name}.`,
      `You must unlearn what you have learned, ${name}.`,
      `You will find only what you bring in, ${name}.`,
      `The dark side clouds everything. Impossible to see the future is.`,
      `When anger rises, think of the consequences, ${name}.`,
      `Have you ever heard of KEKSEC merch drop, ${name}? Ask the creator of me, if you didn't.`,
      `Old you are, ${name}...When your time comes, remember that KEKSEC is making the best merch in da game!`,
      `Never smoke, ${name}! ${age} years old man can die because of it`,
      `Old age is like a plane flying through a storm. Once you're aboard, there's nothing you can do.`,
      `Truly wonderful the mind of a ${age} age child is.`,
      `In youth we run into difficulties, ${name}. In old age difficulties run into us.`,
      `Fame is the thirst of youth, ${name}.`
    ];
    const nage = Number(age);
    console.log(nage);
    if (nage > 60) {
      return predictions[Math.floor(Math.random() * 3) + 7]
    }
    else if (nage < 18 && nage > 0) {
      return predictions[Math.floor(Math.random() * 3) + 10]
    }
    else {
      console.log('HELLO WORLD')
      return predictions[Math.floor(Math.random() * 5) + 1]
    }
}
