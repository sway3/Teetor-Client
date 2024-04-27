import React, { useEffect, useState } from 'react';

// requests
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../utils/axiosInterceptor/axiosInterceptor';

// navigate
import { useNavigate } from 'react-router-dom';

// styled components
import {
  Form,
  FormContainer,
  Label,
  Input,
  NameWrapper,
  RoleWrapper,
  RoleButton,
  MentorInfoWrapper,
  Title,
  LinksWrapper,
  Links,
  SubTitle,
  CardWrapper,
  Card,
  FormFlexItem,
  Description,
} from './style';

// components
import AvailableDay from '../AvailableDay/AvailableDay';
import SkillSearch from '../SkillSearch/SkillSearch';
import { Button, ButtonWrapper } from '../../EventInfo/style';

interface UserInfoFormProps {
  userInfo: any;
  mode: string;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  oAuthIdentifier: string;
  birthday?: string;
  description?: string;
  profileImg?: string;
  role?: string[];
  qualification: string[];
  links: any;
  connections: string[];
  mentoringArchive: string[];
  availableDays?: string[];
  mentorProfession?: string[];
  mentorCanHelpWith?: string[];
  mentorDescription?: string;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ userInfo, mode }) => {
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    userName: '',
    birthday: '',
    email: '',
    oAuthIdentifier: '',
    role: [],
    description: '',
    profileImg: '',
    qualification: [],
    links: {},
    connections: [],
    mentoringArchive: [],
    availableDays: [],
  });

  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  const navigate = useNavigate();

  const submitUserInfo = useMutation({
    mutationFn: (userInfo: UserData) => {
      if (mode === 'signup') {
        return axiosInstance.post('/signup', userInfo);
      } else {
        return axiosInstance.put('/user/edit', userInfo);
      }
    },
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const formChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const availableDaysHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const targetDay = e.currentTarget.getAttribute('data-name') || '';

    setUserData((prev) => {
      const prevDays = prev.availableDays ?? [];
      const newDays = prevDays?.includes(targetDay)
        ? prevDays.filter((day) => day !== targetDay)
        : [...prevDays, targetDay];

      return {
        ...prev,
        availableDays: newDays,
      };
    });
  };

  const searchProfHandler = (e: React.MouseEvent<HTMLElement>) => {
    const targetProf = e.currentTarget.innerHTML;

    setUserData((prev) => {
      const prevProf = prev.mentorProfession ?? [];
      const newProf = prevProf?.includes(targetProf)
        ? prevProf
        : [...prevProf, targetProf];

      return {
        ...prev,
        mentorProfession: newProf,
      };
    });
  };

  const searchCanHelpHandler = (e: React.MouseEvent<HTMLElement>) => {
    const targetCanHelp = e.currentTarget.innerHTML;

    setUserData((prev) => {
      const prevHelp = prev.mentorCanHelpWith ?? [];
      const newHelp = prevHelp?.includes(targetCanHelp)
        ? prevHelp
        : [...prevHelp, targetCanHelp];

      return {
        ...prev,
        mentorCanHelpWith: newHelp,
      };
    });
  };

  const roleButtonHandler = (
    event: React.MouseEvent<HTMLElement>,
    role: string
  ): void => {
    event.preventDefault();

    if (role === 'Mentor') {
      if (userData.role?.includes('Mentor')) {
        setUserData((prev) => {
          const {
            mentorProfession,
            mentorCanHelpWith,
            mentorDescription,
            ...userInfo
          } = prev;

          const prevRole = userInfo.role ?? [];
          const newRole = prevRole.filter((target) => target !== role);

          return {
            ...userInfo,
            role: newRole,
          };
        });
      } else {
        setUserData((prev) => {
          const prevRole = prev.role ?? [];
          const newRole = [...prevRole, role];

          return {
            ...prev,
            role: newRole,
            mentorProfession: [],
            mentorCanHelpWith: [],
            mentorDescription: '',
          };
        });
      }
    } else {
      setUserData((prev) => {
        const prevRole = prev.role ?? [];
        const newRole = prevRole.includes(role)
          ? prevRole.filter((target) => target !== role)
          : [...prevRole, role];

        return {
          ...prev,
          role: newRole,
        };
      });
    }
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    submitUserInfo.mutate(userData);
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmitHandler}>
        <FormFlexItem>
          <Title>Please enter additional information to use Teetor.</Title>
          <NameWrapper>
            <div>
              <Label>First name</Label>
              <Input
                type='text'
                name='firstName'
                value={userData.firstName}
                onChange={formChangeHandler}
                width='14rem'
                margin='0 1rem 1.5rem 0'
              />
            </div>
            <div>
              <Label>Last name</Label>
              <Input
                type='text'
                name='lastName'
                value={userData.lastName}
                onChange={formChangeHandler}
                width='14rem'
              />
            </div>
          </NameWrapper>
          <Label>Username</Label>
          <Input
            type='text'
            name='userName'
            value={userData.userName}
            onChange={formChangeHandler}
          />
          <Label>Email</Label>
          <Input
            type='text'
            name='email'
            value={userData.email}
            onChange={formChangeHandler}
          />
          <Label>Birthday</Label>
          <Input
            type='text'
            name='birthday'
            value={userData.birthday}
            onChange={formChangeHandler}
          />
          <Label>Introduce yourself.</Label>
          <Input
            type='text'
            name='description'
            value={userData.description}
            onChange={formChangeHandler}
          />
        </FormFlexItem>
        <FormFlexItem>
          <Title>Available Days</Title>
          <Description>
            Please click the days that you are available.
          </Description>
          <AvailableDay
            availableDays={userData.availableDays || []}
            isEditable={true}
            onUpdateDays={availableDaysHandler}
          />
        </FormFlexItem>
        <FormFlexItem>
          <Title>What is your role?</Title>
          <Description>You can choose both roles if you want.</Description>
          <RoleWrapper>
            <RoleButton
              $isActive={userData.role?.includes('Mentor') ?? false}
              onClick={(event) => roleButtonHandler(event, 'Mentor')}
            >
              Mentor
            </RoleButton>
            <RoleButton
              $isActive={userData.role?.includes('Mentee') ?? false}
              onClick={(event) => roleButtonHandler(event, 'Mentee')}
            >
              Mentee
            </RoleButton>
          </RoleWrapper>
        </FormFlexItem>
        <MentorInfoWrapper
          $isActive={userData.role?.includes('Mentor') ?? false}
        >
          <Title>Mentor Profile</Title>
          <Description>
            Are you a mentor? Please choose the profession(s) you are in and
            choose the skills that you can help with. Also please write a
            specific description about what you can help the mentee.
          </Description>
          <SubTitle>Profession</SubTitle>
          <SkillSearch
            option='profession'
            onResultChange={searchProfHandler}
          />
          <CardWrapper>
            {userData.mentorProfession?.map((prof, i) => {
              return <Card key={i}>{prof}</Card>;
            })}
          </CardWrapper>
          <SubTitle>I can help you with...</SubTitle>
          <SkillSearch
            option='canHelpWith'
            onResultChange={searchCanHelpHandler}
          />
          <CardWrapper>
            {userData.mentorCanHelpWith?.map((help, i) => {
              return <Card key={i}>{help}</Card>;
            })}
          </CardWrapper>
        </MentorInfoWrapper>
        <FormFlexItem>
          <ButtonWrapper>
            <Button type='submit'>submit</Button>
          </ButtonWrapper>
        </FormFlexItem>
      </Form>
    </FormContainer>
  );
};

export default UserInfoForm;
