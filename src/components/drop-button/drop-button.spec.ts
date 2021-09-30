import { newSpecPage } from '@stencil/core/testing';
import { DropDownSelect } from './dropdown-select';

describe('drop-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DropDownSelect],
      html: `
       <drop-button>
         <mock>
           <button></button>
         <div>
          <span></span>
         </div>
         <div>
          <button>
            <span>x</span>
          </button>
         </div>
         </mock>
       </drop-button>`,
    });
    expect(root).toEqualHtml(`
      <drop-button>
        <mock>
        <button></button>
        <div>
            <span></span>
        </div>
        <div>
         <button>
          <span>x</span>
         </button>
        </div>
        </mock>
      </drop-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DropDownSelect],
      html: `<drop-button title="Stencil" options='[{"text":"Value"}]'>
      <mock>
        <div>
          <button>Stencil</button>
          <div>
            <span>Value</span>
          </div>
          <div>
            <button>
              <span>x</span>
            </button>
          </div>
        </div>
      </mock>
    </drop-button>`,
    });
    expect(root).toEqualHtml(`
      <drop-button title="Stencil" options='[{"text":"Value"}]'>
        <mock>
          <div>
            <button>Stencil</button>
            <div>
            <span>Value</span>
          </div>
          <div>
            <button>
              <span>x</span>
            </button>
          </div>
          </div>
        </mock>
      </drop-button>
    `);
  });
});
