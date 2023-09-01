const quotes = [
  {
    quote:
      "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.\n",
    author: "-도서 '어떤하루' 중-",
  },
  {
    quote: "오늘은 당신의 남은 인생 중, 첫 번째 날이다.\n",
    author: "-영화 아메리칸 뷰티 중-",
  },
  { quote: "인간은 단수가 아니다.\n", author: "-도서 드래곤 라자-" },
  { quote: "별은 바라보는 자에게 빛을 준다.\n", author: "-도서 드래곤 라자-" },
  {
    quote: `"그럼, 그럼 네가 말하고 싶은 진정한, 진정한, 사랑은 뭐지?"
    "상대의 모습 그대로를 사랑하는 것."\n`,
    author: "-도서 드래곤 라자-",
  },
  {
    quote:
      "미래가 완전한 선물이 되도록 하기 위해 우리는 또 다른 커다란 선물을 받았다. 죽을 수 있는 것, 그리고 언제 죽을지 모른다는 것. 불멸의 운명을 가진 신은 우리를 부러워할지도 모른다.\n",
    author: "-도서 드래곤 라자-",
  },
  {
    quote: `"배는 어째서 가라앉지 않는 거지?"
    내 혼잣말에 네 사람이 동시에 대답했다.
    "뜨게 만들어져 있으니까."
    "가라앉고 있기 때문에."
    "물이 받치고 있으니까."\n`,
    author: "-도서 드래곤 라자-",
  },
  {
    quote:
      "난 무엇에게 다가가기 위해 무엇을 버린 적은 없다. 내가 버린 것은 내가 아닌 것. 그리고 난 버림으로써 나만을 남겨둘 수 있었다.\n",
    author: "-도서 드래곤 라자-",
  },
  {
    quote:
      "유피넬과 헬카네스가 저울과 저울추를 만들었다면, 나는 저울눈을 속이겠다.\n",
    author: "-도서 드래곤 라자-",
  },
  {
    quote: "인생의 묘미 중 상당 부분은 반전에서 온다.\n",
    author: "-도서 드래곤 라자-",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
