import pygame # type: ignore

class OAnQuanGame:
    def __init__(self):
        self.board = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0]  # 10 ô dân và 2 ô quan
        self.player_scores = [0, 0]  # Điểm của hai người chơi

    def display_board(self, screen, font):
        screen.fill((255, 255, 255))  # Clear screen with white background
        # Display the board and scores
        for i in range(10):
            pygame.draw.rect(screen, (0, 128, 0), (50 + i * 60, 200, 50, 50))
            text = font.render(str(self.board[i]), True, (255, 255, 255))
            screen.blit(text, (65 + i * 60, 215))
        # Ô quan
        pygame.draw.rect(screen, (128, 0, 0), (50, 100, 50, 50))
        pygame.draw.rect(screen, (128, 0, 0), (50 + 9 * 60, 300, 50, 50))
        text1 = font.render(str(self.board[10]), True, (255, 255, 255))
        text2 = font.render(str(self.board[11]), True, (255, 255, 255))
        screen.blit(text1, (65, 115))
        screen.blit(text2, (65 + 9 * 60, 315))
        # Player scores
        score_text = font.render(f"Player 1: {self.player_scores[0]} | Player 2: {self.player_scores[1]}", True, (0, 0, 0))
        screen.blit(score_text, (200, 50))
        pygame.display.flip()

    def move(self, player, start_index):
        if start_index < 0 or start_index > 11 or start_index == 10 + player or self.board[start_index] == 0:
            return False

        stones = self.board[start_index]
        self.board[start_index] = 0
        index = start_index

        while stones > 0:
            index = (index + 1) % 12
            self.board[index] += 1
            stones -= 1

        # Thu thập dân và tính điểm nếu rơi vào ô trống (không phải ô quan)
        while 0 <= index < 10 and self.board[index] == 1:
            if index != 10 and index != 11:  # Không thu trong ô quan
                self.player_scores[player] += self.board[index]
                self.board[index] = 0
                index = (index - 1) % 12
            else:
                break

        return True

    def is_game_over(self):
        return sum(self.board[:10]) == 0

    def get_winner(self):
        if self.player_scores[0] > self.player_scores[1]:
            return "Player 1"
        elif self.player_scores[0] < self.player_scores[1]:
            return "Player 2"
        else:
            return "Hòa"

# Chơi game
if __name__ == "__main__":
    pygame.init()
    screen = pygame.display.set_mode((800, 400))
    pygame.display.set_caption("Ô Ăn Quan")
    font = pygame.font.Font(None, 36)

    game = OAnQuanGame()
    current_player = 0
    running = True

    while running:
        game.display_board(screen, font)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                x, y = event.pos
                if 200 <= y <= 250:  # Check if click is on the dân row
                    clicked_index = (x - 50) // 60
                    if 0 <= clicked_index < 10:
                        if game.move(current_player, clicked_index):
                            current_player = 1 - current_player

        if game.is_game_over():
            winner = game.get_winner()
            print(f"Trò chơi kết thúc! Người thắng: {winner}")
            running = False

    pygame.quit()
