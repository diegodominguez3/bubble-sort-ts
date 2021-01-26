import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';   

const numbers = new NumbersCollection([1,5,8,7,10]); 
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("fdasrewq"); 
characters.sort(); 
console.log(characters.data); 

const linkedList = new LinkedList(); 
linkedList.add(3);
linkedList.add(1);
linkedList.add(4);
linkedList.add(2);
linkedList.sort();
linkedList.print(); 