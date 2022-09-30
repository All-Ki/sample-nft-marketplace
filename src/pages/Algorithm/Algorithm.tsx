import React from "react";
import data from "./ryu_attributes.json";
import "./styles.css";
interface ITrait {
	  trait_type: string;
	  value: string | boolean; // Il y a des true dans la liste, je les considere comme des props activées
}

export default function Algorithm() {
	const [CoOccurences, set_CoOccurences] = React.useState<Map<string,number>>();
	const [SelectedTrait, set_SelectedTrait] = React.useState<string>("Background:Jungle");
	const [Occurences, set_Occurences] = React.useState<Map<string,number>>();
	/*
	//to get the data as a POJO instead of a map
	function map_to_object(map : Map<string,number>) : any {
		const obj :any = {};
		for (const [key, value] of map) {
			obj[key] = value;
		}
		return obj;
	}
*/
	//Max time complexity is O(N*2) where N is the number of traits
	//This is because we have to iterate over all the traits and then over all the traits again to find the co-occurences
	function countCoOccurences(trait_string: string) {
		const [trait_type , value] = trait_string.split(":");
		const co_occurences : Map<string,number> = new Map();

		for( const trait_array of data){
			for (const trait of trait_array){
				if (trait.trait_type === trait_type && trait.value === value){
					for (const trait2 of trait_array){
						const builtString = `${trait2.trait_type  }:${  trait2.value}`;
						if (trait2.trait_type !== trait_type){
							if (co_occurences.has(builtString)){
								co_occurences.set(builtString, co_occurences.get(builtString)! + 1);
							} else {
								co_occurences.set(builtString, 1);
							}
						}
					}
					break;
				}
			}
		}

		set_CoOccurences(co_occurences);

	}

	function countAllOccurences() {
		const returnedData : Map<string,number> = new Map();

		data.forEach((trait_combo : ITrait[]) => {
			trait_combo.forEach((trait : ITrait) => {
				const builtString = `${trait.trait_type  }:${  trait.value}`;
				const currVal = returnedData.get(builtString);
				if (currVal !== undefined){
					returnedData.set(builtString, currVal  + 1);
				}
				else{
					returnedData.set(builtString, 1);
				}

			});
		});
		console.log(returnedData);
		set_Occurences(returnedData);
	}


	return (
		<>
			<h1>Algorithm</h1>
			<p className="algorithm_input">
				<span>Selected trait (note:  this is case sensitive) <br/><br/></span>
				<input name="trait_to_count" value={SelectedTrait} onChange={(event)=> set_SelectedTrait(event.target.value)}></input>
				<button onClick={()=>{ countCoOccurences(SelectedTrait); countAllOccurences();}}> Count</button>
			</p>
			<span>Co-occurences : </span>

			{ CoOccurences &&Array.from(CoOccurences).map((occurence : [string,number]) => {
				return (
					<p className="algorithm_output" key={occurence[0]}>
						<span className="co-occurences">{occurence[0]}:{occurence[1]}</span>
					</p>
				);
			})
			}

			<p><br/>Occurences : <br/></p>
			{Occurences && Array.from(Occurences).map((occurence : [string,number]) => {
				return (<span key={occurence[0]} className="occurences">{occurence[0]} : {occurence[1]}<br/></span>);
			}
			)
			}
		</>
	);
}