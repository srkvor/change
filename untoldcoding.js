const text =
  "Dear Manii , He asach timepass letter ahe but still vach.         Every passing day without you feels like a piece of me is missing. Your laughter, your kindness, your unwavering support—these are the things I find myself craving more than ever. Life seems a little less colorful without your presence by my side.   There's a unique comfort in being able to be completely yourself with someone, and that's a comfort I find only in you.Let's make a promise to each other—to never let the miles between us dull the spark of our friendship. Tujhe 'Goodmorning' wale texts sathi tar me roj wait krto. Majhi sakal tya text shivay chaluch hot nahiiii and ur my luckyyy charmmmm girlll. Kiti pan kahi pan houde i wont do anything which will hurt youuuu.. I Love Youuuu Lotsss ....................  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
