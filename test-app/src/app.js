import MyClass from "./script";

export class App {
  message = 'Hello World!'

  constructor() {
    this.loadJQuery();
  }

  loadJQuery() {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version

    // Wait for jQuery to load, then execute jQuery code
    script.onload = () => {
      $(document).ready(() => this.setButtonFunctionality());
      $(document).ready(() => this.setTableFunctionality(this));
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  }

  rowData = [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
    { name: 'Mike Johnson', age: 40, location: 'Chicago' }
  ];

  setButtonFunctionality()
  {
    $(document).ready(() => {
      $("#btn2").click(() => {
        alert("HTML: " + $("#btn2").html());
      });
    });
  }

  setTableFunctionality(app) {
    $(document).ready(() => {
      $("td").click(function () {
        // 'this' refers to the clicked <td> element
        app.openPanel( $(this).parent().index() - 2);
      });
    });
  }

  
  // Function to open the panel and display data
  openPanel(index) {
    const panel = document.getElementById('panel');
    const panelContent = document.getElementById('panel-content');
    
    // Inject data into the panel content
    panelContent.innerHTML = `
      <p><strong>Name:</strong> ${this.rowData[index].name}</p>
      <p><strong>Age:</strong> ${this.rowData[index].age}</p>
      <p><strong>Location:</strong> ${this.rowData[index].location}</p>
    `;
    
    // Show the panel with a smooth transition
    panel.classList.add('show');
    console.log( `${this.rowData[index].name}`);
  }
  
  // Function to close the panel
  closePanel() {
    const panel = document.getElementById('panel');
    panel.classList.remove('show');
  } 
}


function loadData()
{
  //debugger;
  let tableBody = document.querySelector('#dataTable'); 

  //access data tru API
  let rowData2 = [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 34, location: 'Los Angeles' },
    { name: 'Mike Johnson', age: 40, location: 'Chicago' }
  ];

  rowData2.forEach(row => {
    const tr = document.createElement('tr');

    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      //td.onclick = () => {openPanelLocal(0)}
      tr.appendChild(td);
    });

    tableBody.appendChild(tr);
  });
}   

document.addEventListener("readystatechange", (event) => {
  console.log("DOM fully loaded and parsed");
  loadData();
});

  

// document.onreadystatechange = function () {
//   if (document.readyState !== 'loading') {
//     // Execute code here
//     console.log("DOM fully loaded and parsed");
//   }
// }






