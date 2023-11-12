import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('main-div'));

type TheModel = {
  enabled: boolean;
};

type SomeComponentProps = {
    model: TheModel
}
function SomeComponent({model}: SomeComponentProps) {
  return (
    <form>
        <input disabled={!model.enabled} />
        <button disabled={!model.enabled}>the button</button>
    </form>
  )
}

const model: TheModel = {
    enabled: true,
}

setInterval(() => {
    root.render(
        <div>
            <p>Hello</p>
            <p>World</p>
            <SomeComponent model={{...model}} />
            <SomeComponent model={{enabled: !model.enabled}} />
            <p>{model.enabled.toString()}</p>
        </div>
    )    
    model.enabled = !model.enabled
}, 2000);
