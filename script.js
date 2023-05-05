
const btn = document.getElementById("btn-form-submit");
const btn = document.getElementById("btn-form-submit");


const Item = function (name,Quantity,UnityPrice)
  { this.name = name;
    this. Quantity = Quantity;
    this. UnityPrice = UnityPrice;
    this.totalPrice = function () {
        return this.Quantity * this.UnityPrice;
    };
     
 }

 let item1 = new Item("biscuit",7,60);
 let item2 = new Item("food",7,60);
 let items = [item1, item2];

 
function guessTotalPrice() {
   
    let sum = 0; 
     for(let item of items)
     {
         sum+=item.totalPrice();
     }
 
     return sum;
     
 }


function addToItems(item) {
   
    var olditem = items.find(i => i.name.toLowerCase() === item.name.toLowerCase()); 
    if (olditem == undefined) {
        items.push(item);
        return;
    }

    olditem.Quantity = parseInt(olditem.Quantity) + parseInt(item.Quantity);
}



function renderItems() 
{
    var olditems = document.getElementsByClassName("item-row");
    var table = document.getElementById('table');

    for(let item of Array.from(olditems))
    {
        table.removeChild(item);
    }
    
    for (let i = 0; i < items.length; i++)
    {
        addItemToTable((i + 1), items[i]);
    }

}

function addItemToTable(sn,item) 
{

     let table = document.getElementById('table');
     let totalRow = document.getElementById('total-row');
     let totalPriceTd = document.getElementById('total-price');

     totalPriceTd.innerText = guessTotalPrice();


     let tr = document.createElement("tr");
     tr.classList.add("item-row"); 
  
    tr.appendChild(createTdElement('item-num',`${sn}`));
    tr.appendChild(createTdElement('item-name',`${item.name}`));
    tr.appendChild(createTdElement('item-quantity',`${item.Quantity}`));
    tr.appendChild(createTdElement('item-unityprice',`${item.UnityPrice}`));
    tr.appendChild(createTdElement('item-totalprice',`${item.totalPrice()}`));

    const tdDelectItem = createTdElement('delecteBtn', '');
    const btnDelect = document.createElement('button');
    btnDelect.classList.add('deleteButton');

    totalRow.parentElement.removeChild(totalRow);

    table.appendChild(tr);
    table.appendChild(totalRow);

    console.log(tr);
    
}

renderItems();
    function createTdElement(className,text) {
        let td = document.createElement('td');
        td.classList.add(className);
        td.innerHTML = text;
        return td;   
    }




btn.addEventListener('click',function()
{
    const inputName  = document.getElementById('input-item-name');
    const inputquantity  = document.getElementById('input-item-quantity');
    const inputunitprice  = document.getElementById('input-item-unitprice');
    

    let newitem = new Item(inputName.value, inputquantity.value,inputunitprice.value);

    addToItems(newitem);
    renderItems();
})


