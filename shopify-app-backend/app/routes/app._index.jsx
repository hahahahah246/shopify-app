import {
  Box,
  Card,
  Layout,
  Link,
  Page,
  Text,
  BlockStack,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function IndexPage() {
  return (
    <Page>
      <TitleBar title="Home" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Welcome to Palleon
              </Text>
              <Text>
                You can start creating your merch templates here.
              </Text>
              <Link
                url="https://shopify-app-3ga2.vercel.app/"
                target="_blank"
                removeUnderline
              >
                <Button variant="primary">
                  Create A New Template
                </Button>
              </Link>
            </BlockStack>
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
