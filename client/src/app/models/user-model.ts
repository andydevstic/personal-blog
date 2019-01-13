export class User {
  public username: string;
  public id: number;
  public password?: string;
  public confirmationPassword?: string;
  public birthday: Date;
  public avatar: string;
  public bio: string;
  public gender: string;
  public profession: string;
  public permissionCode: string;
  public activated: boolean;

  constructor(data?: any) {
    // this.username = data.username || null;
    // this.id = data.id || null;
    // this.password = data.password || null;
    // this.birthday = data.birthday || new Date();
    // this.avatar = data.avatar || null;
    // this.bio = data.bio || null;
    // this.gender = data.gender || null;
    // this.profession = data.profession || null;
    // this.permissionCode = data.permissionCode || null;
    // this.activated = data.activated || false;
  }
}
