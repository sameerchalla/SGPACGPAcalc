const GRADE_POINTS = {
    'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'F': 0
};

const semesterContainer = document.getElementById('semester-container');
const sgpaSemesterContainer = document.getElementById('sgpa-semester-container');
const subjectModeBtn = document.getElementById('subject-mode-btn');
const sgpaModeBtn = document.getElementById('sgpa-mode-btn');
const subjectMode = document.getElementById('subject-mode');
const sgpaMode = document.getElementById('sgpa-mode');
const addBtn = document.getElementById('add-semester');
const addSgpaBtn = document.getElementById('add-sgpa-semester');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const resultCard = document.getElementById('result-card');

let currentMode = 'subject'; // Track current mode

// Mode switching
subjectModeBtn.addEventListener('click', () => {
    currentMode = 'subject';
    subjectMode.classList.remove('hidden');
    sgpaMode.classList.add('hidden');
    subjectModeBtn.classList.remove('text-gray-700', 'hover:bg-gray-300');
    subjectModeBtn.classList.add('bg-blue-600', 'text-white');
    sgpaModeBtn.classList.remove('bg-blue-600', 'text-white');
    sgpaModeBtn.classList.add('text-gray-700', 'hover:bg-gray-300');
    addBtn.classList.remove('hidden');
    addSgpaBtn.classList.add('hidden');
    resultCard.classList.add('hidden');
});

sgpaModeBtn.addEventListener('click', () => {
    currentMode = 'sgpa';
    subjectMode.classList.add('hidden');
    sgpaMode.classList.remove('hidden');
    sgpaModeBtn.classList.remove('text-gray-700', 'hover:bg-gray-300');
    sgpaModeBtn.classList.add('bg-blue-600', 'text-white');
    subjectModeBtn.classList.remove('bg-blue-600', 'text-white');
    subjectModeBtn.classList.add('text-gray-700', 'hover:bg-gray-300');
    addBtn.classList.add('hidden');
    addSgpaBtn.classList.remove('hidden');
    resultCard.classList.add('hidden');
});

// Create SGPA input section for a semester
function createSgpaSemesterSection() {
    const semesterIndex = sgpaSemesterContainer.children.length + 1;
    const div = document.createElement('div');
    div.className = "sgpa-semester-row grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-end p-4 bg-blue-50 rounded-lg border border-blue-200";
    div.innerHTML = `
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Semester Number</label>
            <input type="number" min="1" placeholder="e.g. 1" value="${semesterIndex}" class="semester-num w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">SGPA</label>
            <input type="number" step="0.01" min="0" max="10" placeholder="e.g. 8.5" class="sgpa-value w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Credits</label>
            <input type="number" step="0.5" placeholder="Total credits" class="sgpa-credits w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
        </div>
        <div class="flex justify-end md:col-span-1">
            <button onclick="this.parentElement.parentElement.remove()" class="text-red-500 hover:text-red-700 p-2">
                <i class="fas fa-trash text-lg"></i>
            </button>
        </div>
    `;
    sgpaSemesterContainer.appendChild(div);
}

// Template for a new semester section
function createSemesterSection() {
    const semesterIndex = semesterContainer.children.length + 1;
    const div = document.createElement('div');
    div.className = "semester-section mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200 animate-fade-in";
    div.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-blue-900">Semester ${semesterIndex}</h3>
            <button onclick="this.parentElement.parentElement.remove()" class="text-red-500 hover:text-red-700 p-2">
                <i class="fas fa-trash text-lg"></i>
            </button>
        </div>
        <div class="semester-subjects">
            <div class="subject-row grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-end">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                    <input type="text" placeholder="e.g. Mathematics" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                    <input type="number" step="0.5" placeholder="Credits" class="subject-credits w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                    <select class="subject-grade w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                        ${Object.keys(GRADE_POINTS).map(g => `<option value="${g}">${g}</option>`).join('')}
                    </select>
                </div>
                <div class="flex justify-end">
                    <button onclick="this.parentElement.parentElement.remove()" class="text-red-500 hover:text-red-700 p-2">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        <button onclick="addSubjectToSemester(this)" class="mt-3 text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center">
            <i class="fas fa-plus mr-1"></i> Add Subject
        </button>
    `;
    semesterContainer.appendChild(div);
}

// Add subject to specific semester
function addSubjectToSemester(button) {
    const semester = button.closest('.semester-section');
    const subjectsContainer = semester.querySelector('.semester-subjects');
    const div = document.createElement('div');
    div.className = "subject-row grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-end";
    div.innerHTML = `
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
            <input type="text" placeholder="e.g. Mathematics" class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Credits</label>
            <input type="number" step="0.5" placeholder="Credits" class="subject-credits w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Grade</label>
            <select class="subject-grade w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                ${Object.keys(GRADE_POINTS).map(g => `<option value="${g}">${g}</option>`).join('')}
            </select>
        </div>
        <div class="flex justify-end">
            <button onclick="this.parentElement.parentElement.remove()" class="text-red-500 hover:text-red-700 p-2">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    subjectsContainer.appendChild(div);
}

// Initial semester with 4 subjects
for(let i=0; i<1; i++) createSemesterSection();
for(let i=0; i<3; i++) addSubjectToSemester(document.querySelector('button[onclick*="addSubjectToSemester"]'));

// Initial SGPA semester
createSgpaSemesterSection();

addBtn.addEventListener('click', createSemesterSection);
addSgpaBtn.addEventListener('click', createSgpaSemesterSection);

calculateBtn.addEventListener('click', () => {
    if (currentMode === 'subject') {
        calculateCgpaBySubjects();
    } else {
        calculateCgpaBySgpa();
    }
});

// Calculate CGPA by subjects (existing logic)
function calculateCgpaBySubjects() {
    const semesters = document.querySelectorAll('.semester-section');
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    let valid = true;

    semesters.forEach(semester => {
        const creditsInputs = semester.querySelectorAll('.subject-credits');
        const gradesInputs = semester.querySelectorAll('.subject-grade');
        
        creditsInputs.forEach((input, index) => {
            const credit = parseFloat(input.value);
            const grade = gradesInputs[index].value;
            
            if (!isNaN(credit) && credit > 0) {
                totalCredits += credit;
                totalGradePoints += (credit * GRADE_POINTS[grade]);
            } else if (input.value !== "") {
                valid = false;
            }
        });
    });

    if (totalCredits > 0 && valid) {
        const cgpa = totalGradePoints / totalCredits;
        document.getElementById('cgpa-value').innerText = cgpa.toFixed(2);
        document.getElementById('total-info').innerText = `Based on ${totalCredits} total credits across ${semesters.length} semester(s)`;
        resultCard.classList.remove('hidden');
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        alert("Please enter valid credits for your subjects.");
    }
}

// Calculate CGPA by SGPA inputs
function calculateCgpaBySgpa() {
    const sgpaRows = document.querySelectorAll('.sgpa-semester-row');
    
    let totalGradePoints = 0;
    let totalCredits = 0;
    let valid = true;
    let semesterCount = 0;

    sgpaRows.forEach(row => {
        const sgpaInput = row.querySelector('.sgpa-value');
        const creditsInput = row.querySelector('.sgpa-credits');
        
        const sgpa = parseFloat(sgpaInput.value);
        const credits = parseFloat(creditsInput.value);
        
        if (!isNaN(sgpa) && sgpa >= 0 && sgpa <= 10 && !isNaN(credits) && credits > 0) {
            totalCredits += credits;
            totalGradePoints += (sgpa * credits);
            semesterCount++;
        } else if (sgpaInput.value !== "" || creditsInput.value !== "") {
            valid = false;
        }
    });

    if (totalCredits > 0 && valid && semesterCount > 0) {
        const cgpa = totalGradePoints / totalCredits;
        document.getElementById('cgpa-value').innerText = cgpa.toFixed(2);
        document.getElementById('total-info').innerText = `Based on ${totalCredits} total credits across ${semesterCount} semester(s)`;
        resultCard.classList.remove('hidden');
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        alert("Please enter valid SGPA and credits for all semesters.");
    }
}

resetBtn.addEventListener('click', () => {
    if (currentMode === 'subject') {
        semesterContainer.innerHTML = '';
        for(let i=0; i<1; i++) createSemesterSection();
        for(let i=0; i<3; i++) addSubjectToSemester(document.querySelector('button[onclick*="addSubjectToSemester"]'));
    } else {
        sgpaSemesterContainer.innerHTML = '';
        createSgpaSemesterSection();
    }
    resultCard.classList.add('hidden');
});
