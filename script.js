const gridContainer = document.querySelector('.grid-container');
const restartBtn = document.querySelector('.restart-btn');

//Grid
function makeGrid(dim) {
  gridContainer.style.setProperty('--grid-rows', dim);
  gridContainer.style.setProperty('--grid-cols', dim);
  for (let i = 0; i < dim * dim; i++) {
    let cell = document.createElement('div');
    cell.setAttribute('id', `cell-${[i]}`);
    gridContainer.appendChild(cell).className = 'grid-cell';
  }
}

//draw function
const gridCell = document.querySelectorAll('.grid-cell');
gridContainer.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = 'black';
});

//reset button
const reset = () => {
  //Identify and remove children
  const cells = document.querySelectorAll('.grid-cell');
  const divRemove = cell => {
    gridContainer.removeChild(cell);
  };
  cells.forEach(divRemove);

  //prompt for new dimensions and re-assign
  let dimensions = prompt(
    'What dimensions whould you like to sketch upon?',
    '16'
  );
  if (
    dimensions === null ||
    dimensions === '' ||
    dimensions === true ||
    dimensions <= 1
  ) {
    alert(
      'You must anter a number that is greater than 1. Setting to default of 40.'
    );
    makeGrid(40);
  } else {
    makeGrid(dimensions);
  }
};

//Reset Button
restartBtn.addEventListener('click', reset);

const intialize = () => {
  makeGrid(40);
};

intialize();
