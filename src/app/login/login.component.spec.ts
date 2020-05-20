import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Рендеринг прошел успешно', () => {
    expect(component).toBeTruthy();
  });

  it ('Форма должна быть заполнена', () => {
    const login = component.form.get('login');
    const password = component.form.get('password');
    login.setValue('');
    password.setValue('');
    expect(component.form.valid).toBeFalsy();
});

  it ('Отображается сообщение об ошибке', () => {
    const login = component.form.get('login');
    const password = component.form.get('password');
    login.setValue('');
    password.setValue('');
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    component.onLogin(); 
    fixture.detectChanges();
    expect(component.isEmpty).toBeFalsy();
    const message = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(message.innerHTML).toBe("Одно или несколько полей пустые!");
  });

});
