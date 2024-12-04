export class MyClass {
    myProperty = 'foo';
    myOtherProperty = { key:'value' };

    constructor() {
        // constructor stuff (optional of course)
    }

    myMethod() {
        // do something
    }

    rowData = [
        { name: 'John Doe', age: 28, location: 'New York' },
        { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
        { name: 'Mike Johnson', age: 40, location: 'Chicago' }
      ];
      
      // Function to open the panel and display data
    openPanel(index) {
        const panel = document.getElementById('panel');
        const panelContent = document.getElementById('panel-content');
        
        // Inject data into the panel content
        panelContent.innerHTML = `
          <p><strong>Name:</strong> ${rowData[index].name}</p>
          <p><strong>Age:</strong> ${rowData[index].age}</p>
          <p><strong>Location:</strong> ${rowData[index].location}</p>
        `;
        
        // Show the panel with a smooth transition
        panel.classList.add('show');
      }
      
      // Function to close the panel
    closePanel() {
        const panel = document.getElementById('panel');
        panel.classList.remove('show');
      }
}


const rowData = [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
    { name: 'Mike Johnson', age: 40, location: 'Chicago' }
  ];
  
  // Function to open the panel and display data
function openPanel(index) {
    const panel = document.getElementById('panel');
    const panelContent = document.getElementById('panel-content');
    
    // Inject data into the panel content
    panelContent.innerHTML = `
      <p><strong>Name:</strong> ${rowData[index].name}</p>
      <p><strong>Age:</strong> ${rowData[index].age}</p>
      <p><strong>Location:</strong> ${rowData[index].location}</p>
    `;
    
    // Show the panel with a smooth transition
    panel.classList.add('show');
  }
  
  // Function to close the panel
function closePanel() {
    const panel = document.getElementById('panel');
    panel.classList.remove('show');
  }