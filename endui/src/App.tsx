import './App.css';
import { Button, buttonVariants } from './components/Buttons/Button';
import Heading from './components/Heading/Heading';
import { Input } from './components/Input/Input';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './components/Tabs/Tabs';

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
        <Tabs>test</Tabs>
        <Tabs>test</Tabs>
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
          <TabsList>
            <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>
          <TabsContent value="nodejs">Test</TabsContent>
          <TabsContent value="python">test</TabsContent>
        </Tabs>
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
