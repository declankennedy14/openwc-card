import { html } from 'lit';
import '../src/openwc-card.js';

export default {
  title: 'OpenwcCard',
  component: 'openwc-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <openwc-card
      style="--openwc-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </openwc-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
