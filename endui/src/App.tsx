import './App.css';
import { Button, buttonVariants } from './components/Buttons/Button';
import Heading from './components/Heading/Heading';
import { Input } from './components/Input/Input';

function App() {
  return (
    <div>
      <div>
        <Button variant="ghost" size="lg">
          Hello world
        </Button>
      </div>

      <div>
        <Button variant="default" size="sm">
          Hello world
        </Button>

        <button
          className={buttonVariants({
            variant: 'ghost',
            className: 'w-fit',
            size: 'lg',
          })}
        >
          Test button
        </button>
      </div>

      <Heading size="lg" className="three-d text-black dark:text-light-gold">
        Easily determine
      </Heading>

      <div>
        <Input className="w-fit truncate" />
      </div>
    </div>
  );
}

export default App;
