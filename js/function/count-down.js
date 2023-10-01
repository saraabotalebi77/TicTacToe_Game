export default function showCountDown(){
    const popup = document.querySelector(".popup");
    popup.className = "popup count-down--wrapper";
    popup.innerHTML = `<div class="count-down">
        <span class="count-down--number count-down--number3">3</span>
        <span class="count-down--number count-down--number2">2</span>
        <span class="count-down--number count-down--number1">1</span>
    </div>`;
}