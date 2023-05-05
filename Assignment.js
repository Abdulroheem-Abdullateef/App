
var array = [
            
    {Item : "Rice", Quantity : 4, UnityPrice : 200, total: function()
    {
        return this.Quantity * this.UnityPrice;
    } },

    {Item : "Beans", Quantity : 5, UnityPrice : 700, total: function()
    {
        return this.Quantity * this.UnityPrice;
    } },
    

    {Item : "Yam", Quantity : 2, UnityPrice : 650, total: function()
    {
        return this.Quantity * this.UnityPrice;
    } },
    
    {Item : "water", Quantity : 6, UnityPrice : 100, total: function()
    {
        return this.Quantity * this.UnityPrice;
    } },
    
]

var store = document.getElementById("data");
var a = 1;
var sumtotal = 0;
for(let i in array)
{
  var word = document.createElement("tr");
  word.innerHTML = `
  
  <td>${a} </td>
  <td>${array[i].Item} </td>
  <td>${array[i].Quantity} </td>
  <td>${array[i].UnityPrice} </td>
  <td>${array[i].total()} </td>`
  sumtotal+=array[i].total();
  store.appendChild(word);
  a++;
}

var totalvalue= document.getElementById("total");
totalvalue.innerHTML=` <td>SumTotal = ${sumtotal} </td>`;



