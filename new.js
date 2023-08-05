for (let i = 0; i < arrayObj.length; ArrObj++) {
    const new arr = []
    if(arrayObj.hasownProperty(i))
    
}



const arrayObj = [
    {username: 'kelvintable', name: 'kelvin Table'},
    {username: 'kelvinchair'  , name: 'kelvin Chair'},
    {username: 'petertable'  , name: 'Peter Table'},
    {username: 'kelvintable', name: 'kelvin Table Oliver'},
    {username: 'kelvinoliver', name: 'kelvin Oliver'},
    {username: 'marysteve'  , name: 'Mary Steve'}
]
    const result =  []
    result.push(arrayObj[1])
    
    for (let i = 0; i < arrayObj.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (arrayObj[i].username === arrayObj[j].username) break
            result.push(arrayObj[i])
            
        }
        
    }