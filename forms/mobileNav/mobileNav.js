

hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){ 
    return
    } else {
        switch(s) {
        case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
        case "Describing You":
            ChangeForm(describeYou)
            break
        case "Exercises":
            ChangeForm(favExercises)
            break
    }
  }
}