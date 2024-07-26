import { useState } from 'preact/hooks';

const Greeting = ({messages}) => {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);
  
    return (
      <div className="text-red-200">
        <h3>{greeting}! Thank you for visiting!</h3>
        <button onClick={() => setGreeting(randomMessage())}>
          New Greeting
        </button>
      </div>
    );
}

export default Greeting