const parent = React.createElement(
  'div', {id :'mainDiv'}, 
  [
       React.createElement('div', {id : "innerDiv"}, 
       [
            React.createElement('h1', {id : "head1"}, 'Child 1 insie innerDiv'),
            React.createElement('h1', {id : "head2"}, 'Child 2 inside innerDiv')
       ]),
       React.createElement('div', {id : "outerDiv"}, 
            [
                 React.createElement('h2', {id : "head3"}, "Child 3 inside outerDiv"),
                 React.createElement('h2', {id : "head4"}, "Child 4 inside outerDiv")

            ]
       )
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)