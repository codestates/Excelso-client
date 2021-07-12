import {MypageReviewBody, ReviewContainer,
    ReviewBox, ReviewPicture,
    ReviewFunc, ReviewUpdate,
    ReviewDelete} from "./style"

const MypageReview = () => {
  
  return (
    <MypageReviewBody>
      <ReviewContainer>
        <ReviewBox>
          <ReviewPicture />
          <ReviewFunc>
            <ReviewUpdate>수정</ReviewUpdate>
            <ReviewDelete>삭제</ReviewDelete>  
          </ReviewFunc>
        </ReviewBox>
        <ReviewBox>
        </ReviewBox>     
      </ReviewContainer>  
    </MypageReviewBody>
  )
}

export default MypageReview;