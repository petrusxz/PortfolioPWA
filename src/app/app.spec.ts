import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

let comp: string;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            providers: [],
            imports: [
                IonicModule.forRoot(MyApp)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyApp);
        comp = fixture.componentInstance.rootPage;
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });

    it('displays the home page to the user', () => {
        expect(comp).toBe('HomePage');
    });

});