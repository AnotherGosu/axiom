import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

interface Props {
  children?: React.ReactChild;
}

export default function ErrorBoundary({ children }: Props) {
  const { reload } = useRouter();
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
      onError={reload}
    >
      {children}
    </ReactErrorBoundary>
  );
}

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log(error);
  return (
    <Alert status="warning">
      <AlertIcon />
      <AlertTitle>Возникла ошибка</AlertTitle>
      <AlertDescription>
        <Button onClick={resetErrorBoundary} variant="link">
          Обновить
        </Button>
      </AlertDescription>
    </Alert>
  );
};
