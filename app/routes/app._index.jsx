import {
  Box,
  Card,
  Layout,
  Page,
  BlockStack,
  Button,
  Text,

} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function IndexPage() {
  return (
    <Page 
    
    >
      <TitleBar title="Dashboard" />
      <Layout style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
        <Layout.Section>
        <Text variant="headingMd" as="h1">Hi, Admin</Text>
          <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <Button variant="primary" style={{display: "flex", justifyContent: "center", alignItems: "center", padding:"20px"}}>Continue to Dashboard</Button>
                    </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
