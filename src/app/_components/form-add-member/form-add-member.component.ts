import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-form-add-member',
  templateUrl: './form-add-member.component.html',
  styleUrls: ['./form-add-member.component.css']
})

export class FormAddMemberComponent {
  form : FormGroup = new FormGroup({});

  constructor(private memberService: MemberService, private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      semester: '',
      career: ''
    });
  }

  agregarMiembro(fb: FormGroup) {
    fb = this.form;
    const member: CreateMember =
    {
      name: fb.value.name,
      email: fb.value.email,
      semester: fb.value.semester,
      career: fb.value.career
    };
    this.memberService.createMember(member).subscribe(()=> {

    });
  }
}
