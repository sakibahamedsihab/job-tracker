const totalEl = getById('total');
const interviewEl = getById('interview');
const rejectedEl = getById('rejected');
const jobEl = getById('jobs');

const allNavBtns = document.querySelectorAll('#all-nav-btns button');
const allCards = document.querySelectorAll('#all-card-container .info-card')


// TAB FILTER FUNCTION
function tabFilter(navBtnPressed) {

}

// CALCULATE COUNT FUNCTION
function calculateCount(){

}

allCards.forEach((card) => {
    const interviewBtn = card.querySelector('.interview-btn');
    const rejectedBtn = card.querySelector('.rejected-btn');
    const deleteBtn = card.querySelector('.delete-btn');
    const state = card.querySelector('.state');

    interviewBtn.addEventListener('click', function() {
        card.setAttribute('data-type', 'interview');
        card.classList.remove('border-l-6', 'border-red-400', 'rounded-l-2xl')
        card.classList.add('border-l-6', 'border-green-400', 'rounded-l-2xl')
        state.classList.remove('border', 'border-red-800', 'text-red-800', 'bg-red-100')
        state.classList.add('border', 'border-green-800', 'text-green-800', 'bg-green-100');
        state.textContent = 'Interview';   
        
        calculateCount();
    })

    rejectedBtn.addEventListener('click', function() {
        card.setAttribute('data-type', 'rejected');
        card.classList.remove('border-l-6', 'border-green-400', 'rounded-l-2xl')
        card.classList.add('border-l-6', 'border-red-400', 'rounded-l-2xl')
        state.classList.remove('border', 'border-green-800', 'text-green-800', 'bg-green-100');
        state.classList.add('border', 'border-red-800', 'text-red-800', 'bg-red-100')
        state.textContent = 'Rejected';

        calculateCount();
    })

    deleteBtn.addEventListener('click', function() {
        card.remove();
        calculateCount();
    })
})

allNavBtns.forEach((navBtn => {
    navBtn.addEventListener('click', function() {
        const navBtnPressed = navBtn.textContent.trim().toLowerCase();
        console.log(navBtnPressed)
        allNavBtns.forEach((btn) => {
            btn.classList.remove('bg-[#422ad5]', 'text-white')
        })
        navBtn.classList.add('bg-[#422ad5]', 'text-white')


        
        // allCards.forEach((card) => {
        //     if(navBtn.textContent === 'All' || navBtn.textContent === card.getAttribute('data-type')){
        //         card.classList.remove('hidden');
        //     } else {
        //         card.classList.add('hidden')
        //     }
        // })
    })
}))
