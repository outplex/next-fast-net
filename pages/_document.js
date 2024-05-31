import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />

        </Head>
        <body>
          <Script src="amazon-connect-chat-interface.js"></Script>
          <Script src="ACChat.js"></Script>
          <Script>
            AmazonCustomChatWidget.ChatInterface.init({
              containerId: 'root',
              initiationIcon: 'icon', // Set either 'icon' or 'button'
            region: "us-east-1",
            name: "refer|inputFields|Name", // **** Mandatory**** For chat without form, please add a constant or a variable. Otherwise, if you have a chat form, then you can refer it to the input fields like "refer|inputFields|Name"
            username: "refer|inputFields|UserName", // **** Mandatory**** For chat without form, please add a constant or a variable. Otherwise, if you have a chat form, then you can refer it to the input fields like "refer|inputFields|UserName"
            apiGateway: "https://l7yb2u72wj.execute-api.us-east-1.amazonaws.com/Prod", // **** Mandatory Provide the api gateway ARN from installing the async chat cloudformation as explained in the readme document.
            contactFlowId: 'a871386b-30ec-4a19-aaa8-ee6216457d0e', // This is the contact flow ID and not the full ARN of that contact Flow, please check README.md for more information.
            instanceId: 'a7b1b16d-1904-47e1-9356-56a68cd0d4ca', // This is the connect instance ID and not the full ARN of that contact Flow, please check README.md for more information.
            attachments: true,
            contactAttr: { },
            // Set optional chat duration: https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html#connect-StartChatContact-request-ChatDurationInMinutes
            chatDurationInMinutes: 1500, // min 60, max 10080 - default 1500 (25 hours)
            preChatForm: {
              visible: true,
            inputFields: [
            {
              name: "Name",
            validation: "required"
                    },
            {
              name: "Contact-Type",
            validation: "required"
                    },
            {
              name: "ID-Number",
            validation: "notrequired"
                    },
            {
              name: "Email-Address",
            validation: "required"
                    },
            {
              name: "Subject",
            validation: "required"
                    }
            ]
            },
            primaryColor: '#135d8a',
            description: 'Conversation',
            dummyField: "this is a dummy field"
          });
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
