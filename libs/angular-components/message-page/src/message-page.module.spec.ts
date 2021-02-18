import { waitForAsync, TestBed } from '@angular/core/testing';
import { MessagePageModule } from './message-page.module';

describe('MessagePageModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MessagePageModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(MessagePageModule).toBeDefined();
  });
});
