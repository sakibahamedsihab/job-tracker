const totalEl = getById('total');
const interviewEl = getById('interview');
const rejectedEl = getById('rejected');
const jobEl = getById('jobs');
const hiddenSectionEl = getById('hidden-section')

const allNavBtns = document.querySelectorAll('#all-nav-btns button');
const allCards = document.querySelectorAll('#all-card-container .info-card')

let navBtnPressed = 'all';


// FUNCTION TO LOAD HIDDEN SECTION
function loadHiddenSection() {
    // learnt this new concept of :not(.className)
    const currentCards = document.querySelectorAll('#all-card-container .info-card:not(.hidden)');
    
    // console.log(currentCards.length)
    if(currentCards.length === 0) {
        hiddenSectionEl.classList.remove('hidden')
    } else {
        hiddenSectionEl.classList.add('hidden')
    }
}

// TAB FILTER FUNCTION
function tabFilter(navBtnPressed) {
    // console.log(navBtnPressed)
    allCards.forEach((card) => {
        // console.log(card.getAttribute('data-type') || 'all')

        if(navBtnPressed === 'all' || navBtnPressed === card.getAttribute('data-type')) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden')
        }
    })
}

// CALCULATE COUNT FUNCTION
function calculateCount(){
    const total = document.querySelectorAll('#all-card-container .info-card').length;
    totalEl.textContent = total;
    const interview = document.querySelectorAll('[data-type="interview"]').length
    // console.log(interview)
    interviewEl.textContent = interview;
    const rejected = document.querySelectorAll('[data-type="rejected"]').length
    rejectedEl.textContent = rejected;
    jobEl.textContent = total;
}
calculateCount()

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
        
        tabFilter(navBtnPressed)
        calculateCount();
    })

    rejectedBtn.addEventListener('click', function() {
        card.setAttribute('data-type', 'rejected');
        card.classList.remove('border-l-6', 'border-green-400', 'rounded-l-2xl')
        card.classList.add('border-l-6', 'border-red-400', 'rounded-l-2xl')
        state.classList.remove('border', 'border-green-800', 'text-green-800', 'bg-green-100');
        state.classList.add('border', 'border-red-800', 'text-red-800', 'bg-red-100')
        state.textContent = 'Rejected';

        tabFilter(navBtnPressed)
        calculateCount();
    })

    deleteBtn.addEventListener('click', function() {
        card.remove();
        calculateCount();
        loadHiddenSection()
    })
})

allNavBtns.forEach((navBtn => {
    navBtn.addEventListener('click', function() {
        navBtnPressed = navBtn.textContent.trim().toLowerCase();
        console.log(navBtnPressed)
        allNavBtns.forEach((btn) => {
            btn.classList.remove('bg-[#422ad5]', 'text-white')
        })
        navBtn.classList.add('bg-[#422ad5]', 'text-white')

        tabFilter(navBtnPressed);
        loadHiddenSection()
        

        // this does not filter tab spontenously.
        // allCards.forEach((card) => {
        //     if(navBtn.textContent === 'All' || navBtn.textContent === card.getAttribute('data-type')){
        //         card.classList.remove('hidden');
        //     } else {
        //         card.classList.add('hidden')
        //     }
        // })
    })
}))
