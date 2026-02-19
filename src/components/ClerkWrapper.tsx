import { ClerkProvider } from "@clerk/clerk-react";
import Header from "./Header";

interface Props {
  publishableKey: string;
  isHomePage?: boolean;
}

const ClerkWrapper = ({ publishableKey, isHomePage }: Props) => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Header isHomePage={isHomePage} />
    </ClerkProvider>
  );
};

export default ClerkWrapper;
