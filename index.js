import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

// Example usage:
const inputSentence = "hello world from copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Outputs: "Copilot from world hello"




const data = [
    [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
    [{ name: 'Bob', age: 20 }]
];

const names = data.flatMap(group => group.map(person => person.name));
console.log(names); // Outputs: ['John', 'Jane', 'Bob']