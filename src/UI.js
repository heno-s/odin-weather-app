export default class UI {
    static displayHours(index) {
        if (isOutOfBonds(index)) {
            return false;
        }
        clearCurrent();
        const hoursToSetActive = document.querySelector(
            `.hours > [data-index="${index}"`
        );
        const dotToSetActive = document.querySelector(
            `.dot[data-index="${index}"`
        );

        hoursToSetActive.classList.add("active");
        dotToSetActive.classList.add("active");

        return true;

        function clearCurrent() {
            document
                .querySelector(".hours > .active")
                .classList.remove("active");
            document
                .querySelector(".dot.active")
                .classList.remove("active");
        }

        function isOutOfBonds(index) {
            return index < 0 || index > 2;
        }
    }

    static displayNextHours() {
        const currentIndex = +document.querySelector(
            ".hours > .active"
        ).dataset.index;
        UI.displayHours(currentIndex + 1);
    }

    static displayPreviousHours() {
        const currentIndex = +document.querySelector(
            ".hours > .active"
        ).dataset.index;
        UI.displayHours(currentIndex - 1);
    }
}
