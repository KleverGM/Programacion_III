import { ThemeProvider } from './css/ThemeContext';
import { Button } from './css/ButtonCss';
import { ButtonEmotion } from './css/ButtonEmotion';
import { ButtonStyled } from './css/ButtonStyled';
import ThemedComponent from './css/ThemedComponent';
import { BootstrapButton } from './bootstrap/BootstrapButton';
import { BootstrapCard } from './bootstrap/BootstrapCard';
import { BootstrapForm } from './bootstrap/BootstrapForm';
import { ButtonTailwind } from './tailwind/ButtonTailwind';
import { InputTailwind } from './tailwind/InputTailwind';
import { CardTailwind } from './tailwind/CardTailwind';
import { AlertTailwind } from './tailwind/AlertTailwind';
import { TableTailwind } from './tailwind/TableTailwind';
import { DaisyButton } from './daisy-ui/DaisyButton';
import { DaisyCard } from './daisy-ui/DaisyCard';
import { DaisyModal } from './daisy-ui/DaisyModal';
import { DaisyLoading } from './daisy-ui/DaisyLoading ';
import { DaisyLabel } from './daisy-ui/DaisyLabel ';
import { DaisyRadio } from './daisy-ui/DaisyRadio';
export default function App() {
  return (
    <>
      <Button />
      <ButtonStyled />
      <ButtonEmotion />
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <BootstrapButton />
      <BootstrapCard />
      <BootstrapForm />
      <br />
      <ButtonTailwind />
      <br />
      <InputTailwind />
      <br />
      <CardTailwind />
      <br />
      <AlertTailwind />
      <br />
      <TableTailwind />
      <br />
      <DaisyButton />
      <br />
      <DaisyCard />
      <br />
      <DaisyModal />
      <br />
      <DaisyLoading />
      <br />
      <DaisyLabel />
      <br />
      <DaisyRadio />
    </>
  );
}