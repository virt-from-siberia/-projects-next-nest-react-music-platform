import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://virtyoz777:SamsungS8@cluster0.2ywbr.mongodb.net/NEST-NEXT-REACT-MUSIC?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
